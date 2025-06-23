import React from 'react';
import FaqColumn from './FaqColumn';

const faqData = [
  {
    label: "BASICS",
    items: [
      {
        question: "How do I change my password?",
        answer: "To change your password, go to your account settings, click on 'Security', and follow the prompts to create a new password.",
      },
      {
        question: "How do I sign up?",
        answer: "Click on the 'Sign Up' button on the homepage, fill out the required details, and confirm your email to activate your account.",
      },
      {
        question: "Can I remove a post?",
        answer: "Yes, navigate to your dashboard, select the post you want to delete, and click the 'Remove' or 'Delete' option.",
      },
      {
        question: "How do reviews work?",
        answer: "Users can leave reviews based on their experience. Reviews are moderated to ensure compliance with our community guidelines.",
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        question: "How do I change my password?",
        answer: "In the Account Settings, go to the 'Change Password' section, enter your current password and your new one to update it.",
      },
      {
        question: "How do I change my account settings?",
        answer: "Click on your profile icon and choose 'Settings'. From there, you can update your profile, email, notifications, and privacy settings.",
      },
      {
        question: "How do I delete my account?",
        answer: "To delete your account, contact our support team through the Help Center or use the 'Delete Account' option under Settings.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer: "Click on 'Forgot Password' on the login page, and we'll send a password reset link to your registered email address.",
      },
      {
        question: "How do I renew my account?",
        answer: "Subscription renewals can be managed in your billing section. You can set it to auto-renew or renew manually before expiry.",
      },
    ],
  },
  {
    label: "Jobs",
    items: [
      {
        question: "How can I apply for a job?",
        answer: "To apply for a job, click on the job listing, review the requirements, and click 'Apply Now'. Fill in your details and submit.",
      },
      {
        question: "How many jobs can I apply for in a month?",
        answer: "There is no limit on the number of job applications you can submit. However, we recommend applying to roles that match your skills.",
      },
      {
        question: "Can I contact the company directly?",
        answer: "Yes, if the employer has made their contact information public, you'll see it on the job listing or company profile page.",
      },
      {
        question: "Can I apply for jobs in multinational companies?",
        answer: "Absolutely. Our platform lists jobs from both local and multinational companies. Use the filters to narrow down your search.",
      },
    ],
  },
];

const FaqPage = () => {
  return (
    <div className="w3l-faq-page">
      <div className="wrapper">
        <div className="d-grid faq-column-grid">
          {faqData.map((column, index) => (
            <FaqColumn key={index} label={column.label} items={column.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
