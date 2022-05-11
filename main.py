from typing import Optional
from fastapi import FastAPI
import simV2
import sim
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel


# api setup
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# end api setup


class SimData(BaseModel):
    pl_name: str
    star_mass: Optional[float] = None
    star_radius: Optional[float] = None


@app.post("/simulateWithData/")
async def create_item(simData: SimData):
    sim.plotOrbitWithData(simData)
    return simData


@app.get("/plotOrbitV1")
def read_root():
    sim.plotOrbit()
    return {"Sim v1 started"}


@app.get("/stopPlotOrbitV1")
def read_root():
    sim.stopPlotOrbit()
    return {"Sim v1 stopped"}
