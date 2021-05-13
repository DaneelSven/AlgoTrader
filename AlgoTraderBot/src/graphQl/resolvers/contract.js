const Contract = require("../models/Contract");

const contractResolver = {
    Query: {
        getContract: async (parent, args) => {
            try {
                const { contractId } = args;
                return await Contract.findById(contractId);
            } catch (error) {
                throw new Error(error);
            }
        },
        getContracts: async (parent, args) => {
            try {
                return await Contract.find();
            } catch (error) {
                throw new Error(error);
            }
        },
    },

    Mutation: {
        createContract: async (parent, args) => {
            try {
                const { contractInput } = args;
                const contractCreate = new Contract({
                    name: contractInput.name,
                    description: contractInput.description,
                    contract_address: contractInput.contract_address,
                    owner_address: contractInput.owner_address,
                    active: contractInput.active,
                });
                return await Contract.create(contractCreate);
            } catch (error) {
                throw new Error(error);
            }
        },
        deactivateContract: async (parent, args) => {
            try {
                const { contractId } = args;
                return await Contract.findByIdAndUpdate(contractId, {active: false}, {
                    new: true,
                });
            } catch (error) {
                throw new Error(error);
            }
        },
        activateContract: async (parent, args) => {
            try {
                const { contractId } = args;
                return await Contract.findByIdAndUpdate(contractId, {active: true}, {
                    new: true,
                });
            } catch (error) {
                throw new Error(error);
            }
        },
        updateContract: async (parent, args) => {
            try {
                const { contractId, contractInput } = args;
                return await Contract.findByIdAndUpdate(contractId, contractInput, {
                    new: true,
                });
            } catch (error) {
                throw new Error(error);
            }
        },
        deleteContract: async (parent, args) => {
            try {
                const { contractId } = args;
                return await Contract.findByIdAndDelete(contractId);
            } catch (error) {
                throw new Error(error);
            }
        },
    },
};

module.exports = contractResolver;
