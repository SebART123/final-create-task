function Unit4 () {
    game.splash("Unit 4 is")
    game.splash("Contextual Applications", "of Differentiation")
    for (let index = 0; index < 3; index++) {
        Unit_FOUR_ANSWERS = game.askForString(Unit_FOUR_Questions._pickRandom())
        if (Unit_FOUR_ANSWERS == "1") {
            Unit_FOUR_Questions.removeAt(0)
            info.changeScoreBy(1)
        } else if (Unit_FOUR_ANSWERS == "2") {
            Unit_FOUR_Questions.removeAt(1)
            info.changeScoreBy(1)
        } else if (Unit_FOUR_ANSWERS == "3") {
            Unit_FOUR_Questions.removeAt(2)
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
        }
    }
    game.splash(Math.round(info.score() / 3 * 100), "Percent")
    startunit()
}
function Unit1 () {
    game.splash("Unit 1 is")
    game.splash("Limits and Continuity")
    for (let index = 0; index < 3; index++) {
        Unit_ONE_ANSWERS = game.askForNumber(Unit_ONE_Questions._pickRandom())
        if (Unit_ONE_ANSWERS == 1) {
            Unit_ONE_Questions.removeAt(0)
            info.changeScoreBy(1)
        } else if (Unit_ONE_ANSWERS == 2) {
            Unit_ONE_Questions.removeAt(1)
            info.changeScoreBy(1)
        } else if (Unit_ONE_ANSWERS == 3) {
            Unit_ONE_Questions.removeAt(2)
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
        }
    }
    game.splash(Math.round(info.score() / 3 * 100), "Percent")
    startunit()
}
function Unit3 () {
    game.splash("Unit 3 is")
    game.splash("Differentiation:Composite,", " Implicit, and Inverse Functions")
    for (let index = 0; index < 3; index++) {
        Unit_THREE_ANSWERS = game.askForString(Unit_THREE_Questions._pickRandom())
        if (Unit_THREE_ANSWERS == "1") {
            Unit_THREE_Questions.removeAt(0)
            info.changeScoreBy(1)
        } else if (Unit_THREE_ANSWERS == "2") {
            Unit_THREE_Questions.removeAt(1)
            info.changeScoreBy(1)
        } else if (Unit_THREE_ANSWERS == "3") {
            Unit_THREE_Questions.removeAt(2)
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
        }
    }
    game.splash(Math.round(info.score() / 3 * 100), "Percent")
    startunit()
}
function startunit () {
    info.setScore(0)
    UnitLevel = game.askForNumber("Select a unit", 1, false)
    if (UnitLevel == 1) {
        Unit1()
    } else if (UnitLevel == 2) {
        Unit2()
    } else if (UnitLevel == 3) {
        Unit3()
    } else if (UnitLevel == 4) {
        Unit4()
    } else if (UnitLevel == 5) {
        Unit5()
    } else if (UnitLevel == 6) {
        Unit6()
    } else if (UnitLevel == 7) {
        Unit7()
    } else {
        Unit8()
    }
}
function Unit8 () {
    game.splash("Unit 8 is")
    game.splash("Applications of", "Integration")
    for (let index = 0; index < 3; index++) {
        Unit_EIGHT_Answers = game.askForString(Unit_EIGHT_Questions._pickRandom(), 5)
        if (Unit_EIGHT_Answers == "1") {
            Unit_EIGHT_Questions.removeAt(0)
            info.changeScoreBy(1)
        } else if (Unit_EIGHT_Answers == "2") {
            Unit_EIGHT_Questions.removeAt(1)
            info.changeScoreBy(1)
        } else if (Unit_EIGHT_Answers == "3") {
            Unit_EIGHT_Questions.removeAt(2)
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
        }
    }
    game.splash(Math.round(info.score() / 3 * 100), "Percent")
    startunit()
}
function Unit5 () {
    game.splash("Unit 5 is")
    game.splash("Analytical Applications", "of Differentiation")
    for (let index = 0; index < 3; index++) {
        Unit_FIVE_ANSWERS = game.askForString(Unit_FIVE_Questions._pickRandom())
        if (Unit_FIVE_ANSWERS == "1") {
            Unit_FIVE_Questions.removeAt(0)
            info.changeScoreBy(1)
        } else if (Unit_FIVE_ANSWERS == "2") {
            Unit_FIVE_Questions.removeAt(1)
            info.changeScoreBy(1)
        } else if (Unit_FIVE_ANSWERS == "3") {
            Unit_FIVE_Questions.removeAt(2)
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
        }
    }
    game.splash(Math.round(info.score() / 3 * 100), "Percent")
    startunit()
}
function Unit2 () {
    game.splash("Unit 2 is")
    game.splash("Differentiation:Definition", "and Fundamental Properties")
    for (let index = 0; index < 3; index++) {
        Unit_TWO_ANSWERS = game.askForString(Unit_TWO_Questions._pickRandom())
        if (Unit_TWO_ANSWERS == "1") {
            Unit_TWO_Questions.removeAt(0)
            info.changeScoreBy(1)
        } else if (Unit_TWO_ANSWERS == "2") {
            Unit_TWO_Questions.removeAt(1)
            info.changeScoreBy(1)
        } else if (Unit_TWO_ANSWERS == "3") {
            Unit_TWO_Questions.removeAt(2)
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
        }
    }
    game.splash(Math.round(info.score() / 3 * 100), "Percent")
    startunit()
}
function Unit7 () {
    game.splash("Unit 7 is")
    game.splash("Differential Equations")
    for (let index = 0; index < 3; index++) {
        Unit_SEVEN_ANSWERS = game.askForString(Unit_SEVEN_QUESTIONS._pickRandom())
        if (Unit_SEVEN_ANSWERS == "1") {
            Unit_SEVEN_QUESTIONS.removeAt(0)
            info.changeScoreBy(1)
        } else if (Unit_SEVEN_ANSWERS == "2") {
            Unit_SEVEN_QUESTIONS.removeAt(1)
            info.changeScoreBy(1)
        } else if (Unit_SEVEN_ANSWERS == "3") {
            Unit_SEVEN_QUESTIONS.removeAt(2)
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
        }
    }
    game.splash(Math.round(info.score() / 3 * 100), "Percent")
    startunit()
}
function Unit6 () {
    game.splash("Unit 6 is")
    game.splash("Integration and", "Accumulation of Change")
    for (let index = 0; index < 3; index++) {
        Unit_SIX_ANSWERS = game.askForString(Unit_SIX_Questions._pickRandom())
        if (Unit_SIX_ANSWERS == "1") {
            Unit_SIX_Questions.removeAt(0)
            info.changeScoreBy(1)
        } else if (Unit_SIX_ANSWERS == "2") {
            Unit_SIX_Questions.removeAt(1)
            info.changeScoreBy(1)
        } else if (Unit_SIX_ANSWERS == "3") {
            Unit_SIX_Questions.removeAt(2)
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
        }
    }
    game.splash(Math.round(info.score() / 3 * 100), "Percent")
    startunit()
}
let Unit_SIX_ANSWERS = ""
let Unit_SEVEN_ANSWERS = ""
let Unit_TWO_ANSWERS = ""
let Unit_FIVE_ANSWERS = ""
let Unit_EIGHT_Answers = ""
let UnitLevel = 0
let Unit_THREE_ANSWERS = ""
let Unit_ONE_ANSWERS = 0
let Unit_FOUR_ANSWERS = ""
let Unit_EIGHT_Questions: string[] = []
let Unit_SEVEN_QUESTIONS: string[] = []
let Unit_SIX_Questions: string[] = []
let Unit_FIVE_Questions: string[] = []
let Unit_FOUR_Questions: string[] = []
let Unit_THREE_Questions: string[] = []
let Unit_TWO_Questions: string[] = []
let Unit_ONE_Questions: string[] = []
game.splash("Welcome to the practice", "AP Calculus AB test")
Unit_ONE_Questions = ["Unit 1 Question 1", "Unit 1 Question 2", "Unit 1 Question 3"]
Unit_TWO_Questions = ["Unit 2 Question 1", "Unit 2 Question 2", "Unit 2 Question 3"]
Unit_THREE_Questions = ["Unit 3 Question 1", "Unit 3 Question 2", "Unit 3 Question 3"]
Unit_FOUR_Questions = ["Unit 4 Question 1", "Unit 4 Question 2", "Unit 4 Question 3"]
Unit_FIVE_Questions = ["Unit 5 Question 1", "Unit 5 Question 2", "Unit 5 Question 3"]
Unit_SIX_Questions = ["Unit 6 Question 1", "Unit 6 Question 2", "Unit 6 Question 3"]
Unit_SEVEN_QUESTIONS = ["Unit 7 Question 1", "Unit 7 Question 2", "Unit 7 Question 3"]
Unit_EIGHT_Questions = ["Unit 8 Question 1", "Unit 8 Question 2", "Unit 8 Question 3"]
startunit()
