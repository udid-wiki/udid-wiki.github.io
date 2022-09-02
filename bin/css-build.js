#!/usr/bin/env node
const {R,ROOT_DIR,DOCS_BASE} = require('../ci/paths')


main()

async function main(){
    const envArgs = getEnv()
    console.log('>>>>>>>>>>',envArgs)
}

function checkRumtimeEnv(){

}

function getEnv(){
    const targetCssDir = R(DOCS_BASE,'static/css')
    
    return {
        targetCssDir,
        cssName:'main.css'
    } 
}