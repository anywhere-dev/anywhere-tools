# ANYWHERE-TOOLS

## WHAT IS IT

Basic tools that we use in our projects for validation, normalization and denormalization of CPF, CNPJ and EMAIL.


## HOW TO USE

Just `npm install anywhere-tools` or `yarn add anywhere-tools` and then you can import it in your project.

## EXAMPLE

```
import {CPF} from 'anywhere-tools'

CPF.validate('561.559.244-30') //returns true because it's a valid CPF
CPF.format('56155924430') //returns the formatted CPF

```