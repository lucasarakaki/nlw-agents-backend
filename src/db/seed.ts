import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts';
import { schema } from './schemas/index.ts';

await reset(db, schema);

await seed(db, schema).refine((f) => {
    return {
        rooms: {
            count: 20, 
            collumns: {
                name: f.companyName(),
                description: f.loremIpsum(),
            },
        }
    }
});

await sql.end();

console.log('Database seeded');