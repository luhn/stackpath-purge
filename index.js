"use strict";

const stackpath = require('stackpath').create(
  process.env.COMPANY_ALIAS,
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET
);

const sites = process.env.SITES.split(",");

exports.purge = function(event, context, callback) {
  for(let site of sites) {
    purge(site, callback);
  }
};

function purge(site, callback) {
  console.log(`Purging ${site}...`);
  stackpath.del(`sites/${site}/cache`, function(err, results) {
    if(err) {
      console.trace(err);
      callback(results);
    } else {
      console.log(`Purging ${site} done.`);
      console.log(results);
    }
  });
}
