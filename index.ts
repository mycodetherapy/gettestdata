import { dictionary } from "./constants";

interface FieldCounts {
    string?: number;
    number?: number;
    boolean?: number;
    null?: number;
    undefined?: number;
    symbol?: number;
    nested?: FieldCounts;
    array?: FieldCounts[];
}

interface TestData {
    [key: string]: string | number | boolean | null | undefined | symbol | TestData | TestData[];
}

const generateMeaningfulString = (): string => {
    const index = Math.floor(Math.random() * dictionary.length);
    return dictionary[index];
};

const generateUniqueNumber = (): number => Math.floor(Math.random() * 100) + 1;

const generateData = (fieldCounts: FieldCounts): TestData => {
    const data: TestData = {};
    const numberKeys: { [key: string]: boolean } = {};
    const booleanKeys: { [key: string]: boolean } = {};

    Object.entries(fieldCounts).forEach(([type, count]) => {
        switch (type) {
            case 'string':
                for (let i = 1; i <= count; i++) {
                    data[`name${Object.keys(data).length + 1}`] = generateMeaningfulString();
                }
                break;
            case 'number':
                for (let i = 1; i <= count; i++) {
                    let numberKey = `age`;
                    if (numberKeys[numberKey]) {
                        numberKey = `${numberKey}${Object.keys(numberKeys).length + 1}`;
                    }
                    numberKeys[numberKey] = true;
                    data[numberKey] = generateUniqueNumber();
                }
                break;
            case 'boolean':
                for (let i = 1; i <= count; i++) {
                    let booleanKey = `status`;
                    if (booleanKeys[booleanKey]) {
                        booleanKey = `${booleanKey}${Object.keys(booleanKeys).length + 1}`;
                    }
                    booleanKeys[booleanKey] = true;
                    data[booleanKey] = Math.random() < 0.5;
                }
                break;
            case 'null':
                for (let i = 1; i <= count; i++) {
                    data[`null${Object.keys(data).length + 1}`] = null;
                }
                break;
            case 'undefined':
                for (let i = 1; i <= count; i++) {
                    data[`undefined${Object.keys(data).length + 1}`] = undefined;
                }
                break;
            case 'symbol':
                for (let i = 1; i <= count; i++) {
                    data[`symbol${Object.keys(data).length + 1}`] = Symbol();
                }
                break;
            case 'nested':
                data[type] = generateData(count);
                break;
            case 'array':
                data[type] = Array.isArray(count) ? count.map(subFieldCounts => generateData(subFieldCounts)) : [];
                break;
            default:
                break;
        }
    });
    return data;
};

const getTestData = (count: number, fieldCounts: FieldCounts = {}): TestData[] => {
    const testData: TestData[] = [];

    for (let i = 0; i < count; i++) {
        testData.push(generateData(fieldCounts));
    }

    return testData;
};

export = getTestData;