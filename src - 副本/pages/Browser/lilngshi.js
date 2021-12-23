<Form>
  <Form.Item>
    <Select>
      {selectList.map((item, index) => (
        <Option key={index} value={item.value}>
          {item.label}
        </Option>
      ))}
    </Select>
  </Form.Item>
</Form>;
