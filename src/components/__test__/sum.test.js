import { sum } from "../sum";

test("sum of 2 nums is ", () => {
    const res = sum(3,4);
    expect(res).toBe(7);
})
