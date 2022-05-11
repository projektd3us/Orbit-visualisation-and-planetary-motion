import json
import string
from enum import Enum
import requests


# enums and classes
class ResponseFormat(Enum):
    CSV = 'csv'
    XML = 'xml'
    JSON = 'json'


# constants
basicPs = 'ps'
basicFields = ['pl_name', 'hostname', 'pl_orbsmax', 'pl_rade', 'pl_masse', 'pl_ratror', 'st_spectype', 'st_rad',
               'st_mass', 'discoverymethod']


def basicQueries(planetName):
    return [f'pl_name like \'%{planetName}%\'']


# apis and stuff
def BaseApiBuilder(request_query: string, response_format: ResponseFormat):
    return f'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query={request_query}+&format={response_format.value}'


def queryToRequestQuery(query: string):
    return query.replace(' ', '+').replace('\n', '+')


def localQueryBuilder(ps: string, fieldList: [], fieldQueries: []):
    fieldListString = ''
    for field in fieldList:
        if fieldListString == '':
            fieldListString += field
        else:
            fieldListString += ', ' + field

    fieldQueriesString = ''
    for query in fieldQueries:
        if fieldQueriesString == '':
            fieldQueriesString += query
        else:
            fieldQueriesString += ' and ' + query

    local_query = f'select distinct {fieldListString} from {ps} where {fieldQueriesString}'
    return local_query


def getPlanetBasicsByName(planetName: string):
    local_query = localQueryBuilder(basicPs, basicFields, basicQueries(planetName))
    local_query = queryToRequestQuery(local_query)
    api_url = BaseApiBuilder(local_query, ResponseFormat.JSON)
    response = requests.get(api_url)
    return response.json()

#
# # main
# if __name__ == '__main__':
#     print(getPlanetBasicsByName('Cnc', ResponseFormat.JSON))
#
