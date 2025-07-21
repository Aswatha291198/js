import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

const Candidate = () => {
    const [allJobs, setAllJobs] = useState(null);

    const navItems = [
        {
            key: '1',
            label: 'Applied Jobs',
        },
        {
            key: '2',
            label: 'See Jobs',
            children: [
                {
                    type: 'group',
                    label: 'Jobs For You',
                    children: [
                        {
                            key: '2-1',
                            label: 'Sales',
                            children: [{
                                key: '2-1-1',
                                label: 'SDR'
                            }]
                        },
                        {
                            key: '2-2',
                            label: 'It',
                            children: [{
                                key: '2-2-1',
                                label: 'FrontEnd'
                            },
                            {
                                key: '2-2-2',
                                label: 'BackEnd'
                            },

                            {
                                key: '2-2-3',
                                label: 'FullStack'
                            },
                            {
                                key: '2-2-4',
                                label: 'Nodejs'
                            },
                            {
                                key:'2-2-5',
                                label:"QA",
                                children:[{
                                    key:'2-2-5-1',
                                    label:'Manual',
                                },
                                {
                                    key:'2-2-5-2',
                                    label:"AutoMation"
                                }
                            ]
                            }
                            ]
                        },
                    ],
                },
            ],
        },
    ];

    const { Sider } = Layout;

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={250} theme="light">
                <Menu
                    mode="inline"
                    items={navItems}
                    defaultSelectedKeys={['1']}
                />
            </Sider>
            <Layout>
                <Layout.Content style={{ padding: '16px' }}>
                    {/* Render job content here */}
                    <h2>Welcome, Candidate!</h2>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default Candidate;
