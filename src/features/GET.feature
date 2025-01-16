Feature: As an API I can retrieve user posts

    Scenario: As an API I can retreive all user posts
        Given that I retreive "posts"
        And the response was succesful
        Then the response status code is 200