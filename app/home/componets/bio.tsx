"use client";

import { FC, useState, useRef } from "react";
import styles from "../style/bio.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  { question: "Why should I use link in bio tools?", answer: "Link in bio tools, such as Hopp, offer a range of benefits for influencers and businesses. They provide a centralized platform to optimize engagement, drive targeted traffic, generate revenue and simplify content sharing. With a single bio link, you can enhance audience engagement, direct traffic to specific destinations, monetize your online presence and streamline content sharing across various platforms. By utilizing these tools, you can maximize the effectiveness of your online presence and achieve your desired goals more efficiently" },
  { question: "What does a link in bio mean on Instagram and TikTok?", answer: "On Instagram and TikTok, 'link in bio' refers to a clickable link located in the bio section of a user's profile. Due to a character count limits in social media bios and restrictions on including external links in individual posts or captions, users often direct their followers to the link in their bio to access additional content, websites or products. Instagram allows users to include a single clickable link in their profile, which can be changed as needed. TikTok also provides this feature, but it is available only to accounts with a certain number of followers or those that are verified. By using the 'link in bio' strategy, users can efficiently direct their followers to relevant online resources while working within the platforms' limitations. Check out our blog article on How To Craft the Perfect Instagram Bio." },
  { question: "Can you get paid and sell things from Hopp?", answer: "Absolutely! With Hopp, you can turn your link in bio into a money-making machine. We provide a range of options to monetize your audience and sell your products. Whether you want to collect tips, request payments for services, earn revenue from affiliate links or sell your own merchandise, Hopp has got you covered. The best part? Your customers can seamlessly make purchases using a credit card right on your Hopp page, eliminating the need for them to navigate to external websites. Say hello to convenient online sales and a seamless shopping experience for your followers. Let's turn your Hopp (and you!) into a revenue-generating powerhouse." },
  { question: "Is Hopp safe to use on all of my social media profiles?", answer: "Hopp has got your back across all social platforms including Instagram, TikTok, YouTube, Snapchat and Facebook. As part of the Wix family, Hopp is trusted by users worldwide, as well as search engine and social media algorithms. Rest assured, your Hopp link is in good hands, allowing you to confidently showcase your online presence and connect with your audience hassle-free. Safety first, Hopp all the way!" },
  { question: "How can I drive more traffic to and through my Hopp link in bio?", answer: "Boosting traffic to your Hopp link in bio is a piece of cake. Spread the word by sharing your Hopp link across all your social platforms, ensuring that your valuable content gets the attention and engagement it deserves from your followers. Then, you can direct people there at the end of your videos and in your captions. You can also leverage QR codes to generate online traffic from real-world sources—directing people straight to your links.Once visitors find their way to your Hopp link, let our analytics be your guide. You’ll get a clear view of what people are clicking on so you can track affiliate links and make informed decisions based on what's working. With customizable link placement, prioritized links, snappy subheadings, animation and more, you can refine your Hopp link on the go, making sure your traffic lands precisely where you want it to." },
  { question: "Can I use the Hopp link in bio for free?", answer: "Yes, the standard Hopp plan is free to use! However, if you're looking for more advanced design capabilities and enhanced functionality to make your link in bio truly stand out, we now offer a Pro package. To upgrade, simply login to your account, click on the upgrade button located at the bottom right of your dashboard, and follow the prompts. If you need assistance, you can find more details in our support article." },
  { question: "How many followers do I need to put a link in my bio on TikTok?", answer: "To add a link in your bio on TikTok, you typically need to meet certain requirements. While these requirements can change over time, as of September 2021, TikTok allows accounts with at least 1,000 followers to include a clickable link in their bio. This feature is not available to all users by default and reaching the follower threshold is necessary to unlock it. Once you meet this requirement, you can edit your profile and add your Hopp link to direct your followers to external websites or content." },
  { question: "Do I need a website to use Hopp?", answer: "Nope! Hopp provides you with a versatile platform that allows you to treat your link-in-bio page like a mini-site in and of itself. Our drag-and-drop editor empowers you to fully customize your page to match your brand. With thousands of layouts and design possibilities, you can add anything you promote, from links to services, coupons and products. Hopp gives you the flexibility to create a dynamic online presence without the need for a separate website." },
  { question: "How is Hopp related to Wix?", answer: "Hopp is link-in-bio solution powered by Wix. With Hopp, Wix users can easily manage and update their link in bio, customize the design to match their website branding and effortlessly connect with their audience. Although Hopp is designed to seamlessly integrate with Wix website features such as Wix CRM, Wix Events, Wix Stores, Wix blog and much more, it also offers robust standalone capabilities to those who don’t have a site. Hopp is a powerful and intuitive solution for any content creators who want to optimize their online presence and maximize engagement with their followers" },
  { question: "How is Hopp different from other link in bio solutions like Linktree?", answer: "Unlike other platforms like Linktree, Hopp offers a customizable search engine integrated directly into your link in bio. This means that your followers can quickly and easily find the specific content you're promoting such as a product, coupon, service and more. Additionally, Hopp provides a top-level editing experience, leveraging the power of Wix technology to offer fully customizable layouts and templates. Lastly, Hopp offers a range of widgets and customization options to effectively promote any content you wish." },
];

const Bio: FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
      <h2 className={styles.make_h2}>Link in bio FAQ</h2>
      <div className={styles.bio_container}>
        {faqData.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          const cubClass = index === faqData.length - 1 ? styles.long_cub1 : styles.long_cub;
          const h3Class = index === faqData.length - 1 ? styles.h3_how1 : styles.h3_how;
          const iconClass = index === faqData.length - 1 ? styles.icon1 : styles.icon;

          const refEl = answerRefs.current[index];
          const contentHeight = refEl ? refEl.scrollHeight : 0;

          return (
            <div key={index} className={cubClass}>
              <div onClick={() => toggle(index)} style={{ cursor: "pointer" }}>
                <h3 className={h3Class}>{item.question}</h3>
                <div className={iconClass}>
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
       <div
  className={`${styles.answer} ${isOpen ? styles.open : ""}`}
  ref={(el) => {
    answerRefs.current[index] = el;
    // Չվերադարձնել ոչինչ՝ TypeScript-ի համար
  }}
  style={{
    maxHeight: isOpen ? `${contentHeight}px` : "0px",
  }}
>
  <p>{item.answer}</p>
</div>

            </div>

            
          );
        })}
      </div>
    </div>
  );
};

export default Bio;

