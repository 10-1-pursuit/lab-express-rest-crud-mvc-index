function groupPeopleByLocations(location, people) {
    return location.map(locations => {
        return { ...locations, people: people.filter(person => person.mainLocation === locations.zip)}
    })
}

module.exports = { groupPeopleByLocations }