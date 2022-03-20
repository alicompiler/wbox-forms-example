import { useState } from "react";
import { SimpleFormFactory, TableLayoutFormFactory } from "wbox-forms-tailwindcss";

export function FactoryExample() {
    const [type, setType] = useState('simple');

    const configuration = {
        formConfig: {},
        fieldConfig: {
            username: {
                type: 'text',
                fieldConfig: {
                    name: 'username',
                    label: 'Username'
                }
            },
            password: {
                type: 'password',
                fieldConfig: {
                    name: 'password',
                    label: 'Password'
                }
            }
        },
        extraOptions: {
            button: {
                text: 'Create Account',
                position: 'end'
            }
        }
    };
    const simpleFactory = new SimpleFormFactory();
    const tableLayoutFactory = new TableLayoutFormFactory();
    return <div>
        <div className="flex py-2 gap-2">
        <button className="p-2 bg-green-400 rounded text-white" onClick={() => setType('simple')}>Simple Form Factory</button>
        <button className="p-2 bg-green-400 rounded text-white" onClick={() => setType('table')}>Table Layout Form Factory</button>
        </div>
        <hr />
        <br />
        {
            type === "simple" && simpleFactory.create(configuration)
        }
        {
            type === "table" && tableLayoutFactory.create(configuration)
        }
    </div>
}