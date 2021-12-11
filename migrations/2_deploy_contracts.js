var HashRegistrar = artifacts.require("HashRegistrar");
var TestResolver = artifacts.require("TestResolver");
var ENS = artifacts.require("ENSRegistry");
var SubdomainRegistrar = artifacts.require("SubdomainRegistrar");

var namehash = require('eth-ens-namehash');
var sha3 = require('js-sha3').keccak_256;
var Promise = require('bluebird');

var domainnames = require('../app/js/domains.json');

// var ensAddress = "0x1F68692D58bABeDC2549a49a2F73cf05fc078af1";

module.exports = function as(deployer, network, accounts) {
    return deployer.then(async () => {
        if (network == "fuji") {
            let ens = await ENS.at('0x1F68692D58bABeDC2549a49a2F73cf05fc078af1');

            await deployer.deploy(HashRegistrar, ens.address, namehash.hash(''), 1639218232);
            // await deployer.deploy(TestResolver);

            // await ens.setSubnodeOwner('0x0', '0x' + sha3('avax'), accounts[0]);
            // await ens.setSubnodeOwner(namehash.hash('avax'), '0x' + sha3('resolver'), accounts[0]);

            // const resolver = await TestResolver.deployed(); // public resolver
            // await ens.setResolver(namehash.hash('resolver.avax'), resolver.address);

            const dhr = await HashRegistrar.deployed();
            console.log("===>dhr", dhr.address)
    
            // await ens.setSubnodeOwner('0x0', '0x' + sha3('avax'), dhr.address); // hashregistrar

            // await deployer.deploy(SubdomainRegistrar, ens.address); // ENS address

            // const registrar = await SubdomainRegistrar.deployed();

            // @todo figure out why this doesn't work
            // return Promise.map(domainnames, async function(domain) {
            //     if(domain.registrar !== undefined) return;
            //     await dhr.setSubnodeOwner('0x' + sha3(domain.name), accounts[0]);
            //     await dhr.transfer('0x' + sha3(domain.name), registrar.address);
            //     await registrar.configureDomain(domain.name, '10000000000000000', 100000);
            // });

        } else {
            // let ens = await ENS.at('0x1F68692D58bABeDC2549a49a2F73cf05fc078af1');
            // await deployer.deploy(SubdomainRegistrar, ens.address);
        }
    });
};
