#!/usr/bin/env node

const compressing = require('compressing')

compressing.tar.compressDir('/app/server/world', `/app/server/backup/world-${new Date().toISOString()}.tar`)
    .then(() => {
        console.log('WORLD BACKUP COMPLETE')
    })
    .catch(error => {
        console.log('WORLD BACKUP ERROR', error)
    });