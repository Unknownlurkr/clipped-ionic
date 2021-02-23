//Pass in string as first PARAM to represent what we are testing (usually component name)
describe('Component Name', () => {

    test('Component does something fantastic', () => {

        //Arrange (configuration and setup of test)
        const component = { click: () => {"Ree"} }
        // Act (execution of actions to change the state)
        component.click()

        // Assert (check if state is as it should be)
        expect(component).toContain("Ree")
    })


})