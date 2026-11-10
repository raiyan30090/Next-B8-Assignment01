function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        multiplier = 2;
    }
    return value * multiplier;
}
console.log(multiplyValue(5, 3));  
console.log(multiplyValue(5));     
console.log(multiplyValue(10, 0));

// Problem number : 02
function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value === true) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
}
console.log(processInput("   TypeScript   "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

// Problem number : 03
function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// Problem number : 04
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Problem number : 05
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(course =>
        course.isPublished === true && course.students >= minStudents
    );
}
const courses: Course[] = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
// Problem number : 06
function pluckValues<T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] {
    return items.map(item => item[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));

// Problem number : 07
class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());

// Problem number : 08
async function validateAgeAsync(age: number): Promise<string> {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}
validateAgeAsync(20)
    .then((result) => {
        console.log(result);
    })
    .catch((error: Error) => {
        console.log("Error:", error.message);
    });
validateAgeAsync(15)
    .then((result) => {
        console.log(result);
    })
    .catch((error: Error) => {
        console.log("Error:", error.message);
    });