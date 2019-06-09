Feature: is_it_monday
   Test if is monday

   Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask weather it's Monday yet
    Then I should be told "<answer>"

  Examples:
    | day            | answer |
    | monday         | yeah   |
    | sunday         | naaa   |
    | Monday         | yeah   |
    | anything else! | naaa   |