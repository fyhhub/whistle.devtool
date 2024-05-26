import { useEffect, useState } from "react"
import { encode, decode } from 'js-base64';
import JsonView from '@uiw/react-json-view';
import { lightTheme } from '@uiw/react-json-view/light';
import { Collapse, Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from "antd";
export default function Share() {
  const [record, setRecord] = useState<any>({})
  useEffect(() => {
    const url = new URL(location.href)
    const shareId = url.searchParams.get('shareId');
    const getRecord = () => {
      fetch('/cgi-bin/shared/get').then((response) => {
        return response.json()
      }).then((res) => {
        const records = res.data;
        const record = records[shareId!];
        if (record.req.method === 'POST') {
          record.req.body = decode(record.req.base64)
          record.res.body = decode(record.res.base64)
        }
        setRecord(record)
      })
    }
    getRecord()
  }, [])
  const reqItems: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '请求url',
      children: record.url
    },
    {
      key: '2',
      label: '请求method',
      children: record.req?.method
    },
    {
      key: '4',
      label: '请求Header',
      children: record.req?.headers ? <JsonView value={record.req?.headers} style={lightTheme} displayDataTypes={false} shortenTextAfterLength={Infinity}/> : null
    },
    record.req?.method === 'POST' ? {
      key: '4',
      label: '请求body',
      children: record.req?.body ? <JsonView collapsed={3} value={JSON.parse(record.req?.body)} style={lightTheme} displayDataTypes={false} shortenTextAfterLength={Infinity}/> : null
    } : null,
  ].filter(Boolean);
  const resItems: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '状态码',
      children: record.res?.statusCode
    },
    {
      key: '2',
      label: '响应Header',
      children: record.res?.headers ? <JsonView value={record.res?.headers} style={lightTheme} displayDataTypes={false} shortenTextAfterLength={Infinity}/> : null
    },
    {
      key: '3',
      label: '响应body',
      children: record.res?.body ? <JsonView collapsed={3} value={JSON.parse(record.res?.body)} style={lightTheme} displayDataTypes={false} shortenTextAfterLength={Infinity}/> : null
    },
  ].filter(Boolean);
  return <div>
    <div className="share-container">
      <div>
        <Descriptions size="small" bordered items={reqItems} column={1}/>
      </div>
      <div>
        <Descriptions size="small" bordered items={resItems} column={1}/>
      </div>
    </div>
  </div>
}
