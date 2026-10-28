function filterSkillsByCategory (skillList, category) {
    if (category === "All") return skillList
    else return skillList.filter(skill => skill.category === category)
}

function calculateTotalCost(cost, time) {
    return (cost * time)
}

function matchSkillsToUser(userNeeds, skillList) {
    const categoryFilteredList = filterSkillsByCategory(skillList, userNeeds.category)
    return categoryFilteredList.filter(skill => skill.price <= userNeeds.maxPrice)
}

module.exports = { filterSkillsByCategory, calculateTotalCost, matchSkillsToUser };