import { MailOutlined, LinkOutlined, ContactsOutlined } from "@ant-design/icons";
import ContentCard from "../components/ContentCard/ContentCard";
import { Card } from "antd";

import "./contact.scss";

// /**
//  * 联系方式页面
//  */
export default function Contact(props) {
  // 联系人对象列表
  const contactList = [
    // {
    //   name: "Jian Ren", // 姓名
    //   siteUrl: "https://www.researchgate.net/profile/Jian-Ren-13", // 个人网站地址
    //   mail: "renjian.sysu@gmail.com", // 电子邮箱
    //   title: "Professor of Bioinformatics", // 职务头衔
    //   address:
    //     "School of Life Sciences, Cancer Center, Sun Yat-sen University, Guangzhou 510060, China", // 地址
    // },
    {
      name: "Qi Zhao", // 姓名
      siteUrl: "https://www.researchgate.net/profile/Qi-Zhao-27", // 个人网站地址
      mail: "zhaoqi@sysucc.org.cn", // 电子邮箱
      title: "Associate Professor of Cancer Genomics", // 职务头衔
      address: "Cancer Center, Sun Yat-sen University, Guangzhou 510060, China", // 地址
    },
  ];

  function InfoCard(props) {
    const {
      infoObj: {
        name, // 姓名
        siteUrl, // 个人网站地址
        mail, // 电子邮箱
        title, // 职务头衔
        address, // 地址
      },
    } = props;

    return (
      <div className="contact-info-wrap">
        <div>
          <a className="contact-info-name" href={siteUrl} target="_blank">
            {name}
          </a>
          <div>
            <span>
              {" "}
              <MailOutlined /> {/*  mail to:  */}
            </span>
            <a href={`mailto:${mail}`}>{mail}</a>
          </div>
        </div>
        <div className="contact-info-title">{title}</div>
        <div>{address}</div>
      </div>
    );
  }

  return (
    <div className="contact-wrap">
      <Card /* title="Contact" icon={<LinkOutlined />} */>
        <span className="contact-tip">If you have any questions, please contact us.</span>
        <div className="contact-content tuma-theme-bdcolor-sc">
          {contactList.map((item, index) => {
            return <InfoCard infoObj={item} key={index} />;
          })}
        </div>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
