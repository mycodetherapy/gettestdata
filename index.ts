interface FieldCounts {
    string?: number;
    number?: number;
    boolean?: number;
}

interface TestData {
    [key: string]: string | number | boolean;
}

const getTestData = (count: number, fieldCounts: FieldCounts): TestData[] => {
    const testData: TestData[] = [];

    const generateUniqueString = (): string => Math.random().toString(36).substring(2, 10);

    const generateUniqueNumber = (): number => Math.floor(Math.random() * 100) + 1;

    const generateData = (): TestData => {
        const data: TestData = {};
        const numberKeys: { [key: string]: boolean } = {};
        const booleanKeys: { [key: string]: boolean } = {};        

        Object.entries(fieldCounts).forEach(([type, count]) => {
            switch (type) {
                case 'string':
                    for (let i = 1; i <= count; i++) {
                        data[`name${Object.keys(data).length + 1}`] = generateUniqueString();
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
                        let booleanKey = `isWorking`;
                        if (booleanKeys[booleanKey]) {
                            booleanKey = `${booleanKey}${Object.keys(booleanKeys).length + 1}`;
                        }
                        booleanKeys[booleanKey] = true;
                        data[booleanKey] = Math.random() < 0.5;
                    }
                    break;
                default:
                    break;
            }
        });
        return data;
    };

    for (let i = 0; i < count; i++) {
        testData.push(generateData());
    }

    return testData;
};

module.exports = getTestData;
