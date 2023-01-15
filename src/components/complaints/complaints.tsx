import React, { FunctionComponent, useState } from 'react';
import Chat from '../chat/chat';
import Complaint, { ComplaintType } from '../complaint/complaint';
import { Message, MessageType } from '../message/message';


interface ComplaintsProps {
	complaints: ComplaintType[]
}


const Complaints: FunctionComponent<ComplaintsProps> = ({
    complaints
}) => {  
  return (<>
    {complaints.map((complaint,index) => (
							<Complaint
                            key= {"complaint_" + index} 
                            imageUrl= {complaint.imageUrl}
                            messages= {complaint.messages}
                            position= {complaint.isChatLeft ? { x: 1700, y: 700 }: { x: 1200, y: 400 }}
                            chatOffset= {complaint.isChatLeft ? { x: -330, y: 210 }: { x: 230, y: 210 }} 
                            />
						))}
    </>
  )
}

export default Complaints;


