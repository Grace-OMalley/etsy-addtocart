# Project Name

> Etsy - Add to Cart Service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Related Projects

  - https://github.com/Grace-OMalley/etsy-imagesmain
  - https://github.com/Grace-OMalley/etsy-reviews

## Usage

<iframe src="https://drive.google.com/file/d/1J-HabLBJBc6C_OXqJay3Mv7vmmitItc6/preview" width="640" height="480" allow="autoplay"></iframe>

The Etsy - Add to Cart service is a CSS/HTML heavy front-end application that features tons of beautiful transitions and a dynamic endpoint that will query a database that will display data pertaining to the item manufacturer, product name, invertory, total sales, price, details, description and customer rating. The service contains a database for accessing data about items affiliated with vendor products. This service has also been optimized to handle mobile friendly viewing:

<iframe src="https://drive.google.com/file/d/1szV2xPcXoLVHfmJttu1K1pCcw_dRxerG/preview" width="640" height="480" allow="autoplay"></iframe>

### API Endpoints
+ GET `/?itemId=[0-99]`
  - Given an url query, itemId retrieves data affiliated with the respective product. If the url query is omited it wil default to an itemId of '1' (click [here](example-data/get_{trailId}_photos.json) for sample data shape / output)

#### API Endpoint Notes:
+ All data returns in .json format.
+ .json shape loosely follows the [{json:api}](https://jsonapi.org/) standard.
+ Reference exact shapes of returned data [here](sampleDataAPI.js).

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 14+

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```