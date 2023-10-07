const planModel = require('../models/plans.model')

function getAllPlans(req, res) {
    const plans = planModel.getAllPlans();
    res.json(plans)
}

module.exports = {getAllPlans}