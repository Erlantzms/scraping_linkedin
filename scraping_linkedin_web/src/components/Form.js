import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

function SearchForm() {
    const onFinish = (values) => {
        console.log('Success:', values);
        let url = ('https://scrapinglinkedin.up.railway.app/data')
        axios.get(url)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    
    return (
        <Form
        name="basic"
        labelCol={{
          srpan: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Jobname"
          name="jobname"
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
  
export default SearchForm;