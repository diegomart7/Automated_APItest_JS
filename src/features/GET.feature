Feature: As an API I can retrieve posts

 Scenario: As an API I can retrieve all the posts
    Given I retrieve "posts"
    And the response was succesful
    Then the response status code is 200

    