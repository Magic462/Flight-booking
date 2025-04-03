
import './App.scss';
import React,{ useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const flightData = [
    {
      id: 1,
      flightNumber: 'AA123',
      passengerName: '张三',
      departure: '2025-03-20 10:00',
      arrival: '2025-03-20 12:00',
      from: '北京',
      to: '上海',
    },
    {
      id: 2,
      flightNumber: 'BB456',
      passengerName: '李四',
      departure: '2025-03-21 14:00',
      arrival: '2025-03-21 16:00',
      from: '广州',
      to: '北京',
    },
    {
      id: 3,
      flightNumber: 'BB456',
      passengerName: '李四',
      departure: '2025-03-21 14:00',
      arrival: '2025-03-21 16:00',
      from: '广州',
      to: '北京',
    },
    {
      id: 4,
      flightNumber: 'BB456',
      passengerName: '李四',
      departure: '2025-03-21 14:00',
      arrival: '2025-03-21 16:00',
      from: '广州',
      to: '北京',
    },
  ];

  const [thinkContent, setThinkContent] = useState(`
    好的，我现在需要帮用户购买2024年6月1日早上从北京到上海的火车票。首先，我应该使用查询火车票的工具来查找符合条件的车次。
    
    用户的出发日期是6月1日，时间范围是早上，所以我得确定“早上”的具体时间段。通常可能是指6点到12点之间，所以我会设置departure_time_start为"06:00"，departure_time_end为"12:00"。这样能确保查询到上午的车次。
    
    接下来调用查询工具，参数包括出发地北京，目的地上海，日期2024-06-01，以及时间范围。得到结果后，我需要检查返回的车次列表。如果有可用车次，选择其中一个（比如第一个）进行购买。如果没结果可能需要调整时间范围，但用户明确要求早上，所以先按这个查。
    
    假设查询成功并找到车次，下一步用购买工具，传入车次号。最后确认购买结果，并通知用户是否成功，完成任务。
    `);

  const markdownContent = `
  ### 姓名：查询火车票
  ### 出发城市：北京
  ### 到达城市：上海
  ### 出发日期：2024-06-01
  ### 出发时间：早上
  ### 返回结果：`

  return (
    <div className='contain'>
      <div className="booking-confirmation">
        {/* 这里需要渲染不同张机票的预定信息 */}
        {flightData.map(flight => (
        <div key={flight.id} className="flight-info">
          <h3>航班号: {flight.flightNumber}</h3>
          <p>乘客姓名: {flight.passengerName}</p>
          <p>出发城市: {flight.from}</p>
          <p>到达城市: {flight.to}</p>
          <p>出发时间: {flight.departure}</p>
          <p>到达时间: {flight.arrival}</p>
          <hr />
        </div>
      ))}
      </div>
      <div className="chat-container">
        <div className="chat-header">
          <h2>ChatBot</h2>
        </div>
        <div className="chat-body">
          <div className="chat-message user">
          <div className="avatar user-avator">人</div>
            <div className="user-message">
            帮我查询一下2024年6月1日从北京到上海的早上的火车票
            </div>
          </div>
          <div className="chat-message bot">
          <div className="avatar bot-avator">AI</div>
          <div className="bot-message">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <input type="text" placeholder='let us book a pocket'/>
          <button>send</button>
        </div>
      </div>
      <div className="chat-container-right">
        <div className="chat-header">
          <h2>ProcessRecords</h2>
        </div>
        <div className="chat-body">
          <div className='chat-message'>
              <div className="think-message" onClick={() => setIsCollapsed(!isCollapsed)} style={{ cursor: 'pointer' }}>
              <strong>以下是思考过程
                <span className="collapsed-icon">
                  {isCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
              </strong>
            </div>
            {!isCollapsed && (
              <div className="think-content">
                {thinkContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
