Feature: Test the product search functionality

    Successfully validate the product search functionality

    Scenario: Log into the platform
        Given The platform is opened
        When the correct credentials are provided
        Then the login is successful

    Scenario: Search the Product by Name
        Given the product search is visible
        When some alphabets are entered in the product search bar
        Then the products having the same alphabets in the name are visible

    Scenario: Search the Product by Code ID
        Given the product search is visible
        When some Code is entered in the product search bar
        Then the products having the same alphabets in the CodeID are visible
