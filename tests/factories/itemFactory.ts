import { faker } from '@faker-js/faker';

export default async function itemFactory(): Promise<{title: string, url: string, description: string, amount: number }> {
    return {
        title: faker.lorem.word(2),
        url: faker.internet.url(),
        description: faker.lorem.paragraph(1),
        amount: 2000
    };
};