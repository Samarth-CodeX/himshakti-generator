from fastapi import FastAPI, HTTPException, status, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional

app = FastAPI(
    title="HimShakti Product Management API",
    description="Week 4 In-Memory API backend for managing regional Himalayan product listings.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
product_catalog = [
    {
        "id": 1,
        "name": "Organic Apple Chutney",
        "category": "Pickle",
        "ingredients": "Himalayan apples, chili, mustard oil",
        "shelf_life": "6 Months",
        "packaging_size": "200g"
    },
    {
        "id": 2,
        "name": "Rhododendron Herbal Tea",
        "category": "Herbal Tea",
        "ingredients": "Dried rhododendron petals, lemongrass, mint",
        "shelf_life": "1 Year",
        "packaging_size": "100g"
    }
]
next_product_id = 3
class ProductBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, example="Wild Honey")
    category: str = Field(..., example="Juice")
    ingredients: str = Field(..., example="Pure forest honey, ginger extracts")
    shelf_life: str = Field(..., example="1 Year")
    packaging_size: str = Field(..., example="500g")

class ProductCreate(ProductBase):
    pass

class ProductResponse(ProductBase):
    id: int

@app.get("/api/tasks/search", response_model=List[ProductResponse], status_code=status.HTTP_200_OK)
def search_products(q: str = Query(..., min_length=1, description="Search term for name or category")):
    query_lower = q.lower()
    results = [
        prod for prod in product_catalog 
        if query_lower in prod["name"].lower() or query_lower in prod["category"].lower()
    ]
    return results


# Endpoint 2: GET /api/tasks — List all items in the product inventory
@app.get("/api/tasks", response_model=List[ProductResponse], status_code=status.HTTP_200_OK)
def list_all_products():
    return product_catalog

@app.get("/api/tasks/{id}", response_model=ProductResponse, status_code=status.HTTP_200_OK)
def get_single_product(id: int):
    for product in product_catalog:
        if product["id"] == id:
            return product
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, 
        detail=f"Product with ID {id} not found in HimShakti catalog."
    )

@app.post("/api/tasks", response_model=ProductResponse, status_code=status.HTTP_201_CREATED)
def create_product(payload: ProductCreate):
    global next_product_id
    if not payload.name.strip():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Validation Error: Product name cannot be empty spaces."
        )

    new_product = {
        "id": next_product_id,
        "name": payload.name,
        "category": payload.category,
        "ingredients": payload.ingredients,
        "shelf_life": payload.shelf_life,
        "packaging_size": payload.packaging_size
    }
    
    product_catalog.append(new_product)
    next_product_id += 1
    return new_product

@app.put("/api/tasks/{id}", response_model=ProductResponse, status_code=status.HTTP_200_OK)
def update_product(id: int, payload: ProductCreate):
    for product in product_catalog:
        if product["id"] == id:
            product["name"] = payload.name
            product["category"] = payload.category
            product["ingredients"] = payload.ingredients
            product["shelf_life"] = payload.shelf_life
            product["packaging_size"] = payload.packaging_size
            return product
            
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, 
        detail=f"Cannot update. Product with ID {id} does not exist."
    )

@app.delete("/api/tasks/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_product(id: int):
    global product_catalog
    for index, product in enumerate(product_catalog):
        if product["id"] == id:
            product_catalog.pop(index)
            return  # 204 No Content safely ignores return payloads
            
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, 
        detail=f"Cannot delete. Product with ID {id} does not exist."
    )