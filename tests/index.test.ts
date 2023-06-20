import { calculateTax } from "../src";

describe("calculate Tax from salary", ()=>{
  it("Should return 0", ()=>{
    const salary = generateSalary(100, 2500)
    const tax = calculateTax(salary)
    expect(tax).toBe(0)
  })
  it("Should return 7,5% of salary", ()=>{
    const salary = generateSalary(2500, 3200)
    const tax = calculateTax(salary)
    expect(tax).toBe(salary * 0.075)
  })
  it("Should return 15% of salary", ()=>{
    const salary = generateSalary(3200, 4250)
    const tax = calculateTax(salary)
    expect(tax).toBe(salary * 0.15)
  })
  it("Should return 22,5% of salary", ()=>{
    const salary = generateSalary(4250, 5300)
    const tax = calculateTax(salary)
    expect(tax).toBe(salary * 0.225)
  })
  it("Should return 27,5% of salary", ()=>{
    const salary = generateSalary(5300, Number.POSITIVE_INFINITY)
    const tax = calculateTax(salary)
    expect(tax).toBe(salary * 0.275)
  })
})

function generateSalary(min: number, max:number){
 return Math.floor(Math.random()*(max - min + 1) + min)
}