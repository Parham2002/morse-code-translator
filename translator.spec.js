import { englishToMorse } from "./translator.js";
import { morseToEnglish } from "./translator.js"

// #1
describe('Testing englishToMorse', () => {
  it("'A' should be '.-'", ()=> {
    expect(englishToMorse("a")).toBe(".-")
  })

})

// #2
describe('Testing englishToMorse', () => {
  it("'hello' should be '.... . .-.. .-.. ---'", ()=> {
    expect(englishToMorse("hello")).toBe(".... . .-.. .-.. ---")
  })

})

// #3
describe('Testing englishToMorse', () => {
  it("'hElLo' should be '.... . .-.. .-.. ---'", ()=> {
    expect(englishToMorse("hElLo")).toBe(".... . .-.. .-.. ---")
  })

})

// #4
describe('Testing englishToMorse', () => {
  it("'hello there' should be '.... . .-.. .-.. --- - .... . .-. .'", ()=> {
    expect(englishToMorse("hello there")).toBe(".... . .-.. .-.. --- - .... . .-. .")
  })

})

// #5
describe('Testing englishToMorse', () => {
  it("'1' should be '.----'", ()=> {
    expect(englishToMorse("1")).toBe(".----")
  })

})

// #6
describe('Testing englishToMorse', () => {
  it("'34' should be '...-- ....-'", ()=> {
    expect(englishToMorse("34")).toBe("...-- ....-")
  })

})

// #7
describe('Testing morseToEnglish', () => {
  it("'.-' should be 'A'", ()=> {
    expect(morseToEnglish(".-")).toBe("A")
  })

})

// #8
describe('Testing morseToEnglish', () => {
  it("'.... . .-.. .-.. ---' should be 'HELLO'", ()=> {
    expect(morseToEnglish(".... . .-.. .-.. ---")).toBe("HELLO")
  })

})

// #9
xdescribe('Testing englishToMorse', () => {
  it("2 should be 2", ()=> {
    expect().toBe()
  })

})

// #10
xdescribe('Testing englishToMorse', () => {
  it("2 should be 2", ()=> {
    expect().toBe()
  })

})