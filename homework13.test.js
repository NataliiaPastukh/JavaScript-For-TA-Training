//Task 1
const {sum} = require('./task1_hw13');

describe("Sum test", () => {
    test("add 0.1 to 0.2 is 0.3", () => {
        expect(sum(0.1, 0.2)).toBe(0.3);
    });
})

//or
/*test('Sum test', () => {
  const value = 0.1 + 0.2;
   expect(value).toBeCloseTo(0.3); 
});*/


//Task 2
const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];
describe ("userList tests", () => {
test('the userList has admin on it', () => {
    expect(userList).toContain('admin');
    expect(new Set(userList)).toContain('admin');
  });

test('the first element is nick', () => {
    expect(userList[0]).toContain('Nick');
  });

test('the last element is new_user_2', () => {
    expect(userList[4]).toContain('new_user_2');
  });

test('the array length is 5', () => {
    expect(userList.length = 5).toBeTruthy();
  });

test('the 3rd element is string', () => {
    expect(userList[2] = String).toBeTruthy();
  });

test('the 8th element is not available', () => {
    expect(userList[8]).toBeUndefined();
  });
});

//Task 3
const circleModule = require('./task3_hw13.js');
//const {getCircleLength} = require('./task3_hw13.js');
//const {getCircleArea} = require('./task3_hw13.js');

describe("Circle test", () => {
    test("circle length is 138.2", () => {
        expect(circleModule.getCircleLength(22)).toBeCloseTo(138.2);
    });

    test("circle area is 254.47", () => {
        expect(circleModule.getCircleArea(9)).toBeCloseTo(254.47);
    });

    test('getCircleLength should return the circumference of a circle with radius 1', () => {
        expect(circleModule.getCircleLength(1)).toBeCloseTo(6.3);
      });

    test('getCircleArea should return the area of a circle with radius 1', () => {
        expect(circleModule.getCircleArea(1)).toBeCloseTo(3.14);
      });
});

//Task 4
const {filterFoodPrice} = require('./task4_hw13.js');
describe("Food function", () => {
    const food = [
        { kind: 'potato', price: 10 },
        { kind: 'bread', price: 16 },
        { kind: 'pepper', price: 27 },
        { kind: 'banana', price: 32 },
        { kind: 'lemon', price: 50 }
      ];
      const min = 12;
      const max = 40;
      const filteredFoodList = filterFoodPrice(food, min, max);
    test("filtered food array length is 3", () => {
        expect(filteredFoodList.length).toBe(3);
    });

    test('filtered food array contains { kind: "pepper", price: 27 }', () => {
        expect(filteredFoodList).toContainEqual({ kind: 'pepper', price: 27 });
      });
    
    test('filtered food array contains 2nd, 3rd, 4th element of food array', () => {
        const expectedArr = [
            { kind: 'bread', price: 16 },
            { kind: 'pepper', price: 27 },
            { kind: 'banana', price: 32 },
          ];
        expect(filteredFoodList).toEqual(expectedArr);
      });

    test('propery "price" of the 1st element of sorted array is greater than min', () => {
        expect(filteredFoodList[0].price).toBeGreaterThan(min);
      });
    
    test('propery "price" of the 3rd element of sorted array is less than max', () => {
        expect(filteredFoodList[2].price).toBeLessThan(max);
      });
    
    test('sorted array does not contain { kind: "lemon", price: 50 }', () => {
      expect(filteredFoodList).not.toContainEqual({ kind: 'lemon', price: 50 });
    });
    
    test('sorted array is empty if prices are not withing min and max', () => {
        let emptyFoodList = filterFoodPrice(food, 90, 100);
        expect(emptyFoodList).toEqual([]);
    });

    test('sorted array is not empty if prices are withing min and max', () => {
        expect(filterFoodPrice(food, 20, 30)).toBeTruthy();
    });

});