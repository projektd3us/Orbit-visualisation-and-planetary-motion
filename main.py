from typing import Optional
from fastapi import FastAPI
import sim
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import querys

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


# apis
class SimData(BaseModel):
    pl_name: str
    discoverymethod: str
    st_mass: Optional[float] = None
    st_rad: Optional[float] = None
    hostname: Optional[str] = None


@app.post("/plotWithData/")
def read_root(simData: SimData):
    sim.plotOrbitWithData(simData)
    return {"Sim v1 stopped"}


# @app.get("/plotOrbit")
# def read_root():
#     sim.plotOrbit()
#     return {"Sim v1 started"}


@app.get("/stopPlotOrbit")
def read_root():
    sim.stopPlotOrbit()
    return {"Sim v1 stopped"}


# data apis
@app.post("/getTableData/")
def create_item(simData: SimData):
    tableData = querys.getPlanetBasicsByData(simData.pl_name, simData.discoverymethod)
    return tableData
