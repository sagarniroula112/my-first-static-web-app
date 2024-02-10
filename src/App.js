import "./index.css";
import { BlogList } from "./BlogList";
import { Header } from "./Header";
import { CardList } from "./CardList";
import { useState } from "react";
// import { Form } from "./Form";
// import { FormNir } from "./FormNir";
import { Result } from "./Result";
import { FaqList } from "./FaqList";
import { FaqReturnBtn } from "./FaqReturnBtn";
import { BlogReturnBtn } from "./BlogReturnBtn";

let cardDetails = [
  {
    id: 0,
    title: "Be smarter,",
    description: "Choose your crop ...",
    button: "Get Recommendation",
  },
  // {
  //   id: 1,
  //   title: "Be smarter,",
  //   description: "FAQs!",
  //   button: "Get Answers",
  // },
  // {
  //   id: 2,
  //   title: "Be smarter,",
  //   description: "Read our blogs!",
  //   button: "Let's Learn!",
  // },
];

export const faqDetails = [
  {
    id: 0,
    title: "1.  Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 1,
    title: "2. How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 2,
    title: "3. Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    id: 3,
    title: "4. Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    id: 4,
    title: "5. Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    id: 5,
    title: "6. Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    id: 6,
    title: "7. Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export const blogDetails = [
  {
    id: 0,
    title: "1.  Importance of ML in Agriculture",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 1,
    title: "2. Necessity of Agricultural Development",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 2,
    title: "3. Crop Diseases Prevention",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [showCards, setShowCards] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  function trueShowBlog() {
    setShowBlog((show) => true);
  }

  function falseShowBlog() {
    setShowBlog((show) => false);
  }

  function trueShowCards() {
    setShowCards((show) => true);
  }
  function falseShowCards() {
    setShowCards((show) => false);
  }
  function trueShowFaq() {
    setShowFaq((show) => true);
  }
  function falseShowFaq() {
    setShowFaq((show) => false);
  }
  function trueShowForm() {
    setShowForm((show) => true);
  }
  function falseShowForm() {
    setShowForm((show) => false);
  }

  function handleShowCards() {
    trueShowCards();
    falseShowFaq();
    falseShowForm();
    falseShowBlog();
  }

  function handleShowForm() {
    trueShowForm();
    falseShowCards();
    falseShowFaq();
    falseShowBlog();
  }

  function handleShowFaq() {
    trueShowFaq();
    falseShowCards();
    falseShowForm();
    falseShowBlog();
  }

  function handleShowBlog() {
    trueShowBlog();
    falseShowFaq();
    falseShowCards();
    falseShowForm();
  }

  return (
    <div className="app">
      <nav className="header">
        <Header handleShowFaq={handleShowFaq} handleShowBlog={handleShowBlog} />
      </nav>
      {showCards && (
        <CardList
          cardDetails={cardDetails}
          handleShowCards={handleShowCards}
          handleShowFaq={handleShowFaq}
          handleShowForm={handleShowForm}
        />
      )}

      {showBlog && (
        <>
          <div className="faq-content-box">
            <h1>Related Blogs</h1>
            <div className="ques-container">
              <BlogList
                blogDetails={blogDetails}
                handleShowBlog={handleShowBlog}
              />
            </div>
            <BlogReturnBtn handleShowCards={handleShowCards} />
          </div>
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {showForm && (
          <>
            {/* <Form
              handleShowForm={handleShowForm}
              handleShowCards={handleShowCards}
            /> */}
            {/* <FormNir
              handleShowForm={handleShowForm}
              handleShowCards={handleShowCards}
            /> */}
            <Result />
            <div style={{ position: "absolute", top: "90vh", right: "350px" }}>
              <BlogReturnBtn handleShowCards={handleShowCards} />
            </div>
          </>
        )}
      </div>
      {showFaq && (
        <>
          <div className="faq-content-box">
            <h1>Frequently Asked Questions</h1>
            <div className="ques-container">
              <FaqList faqDetails={faqDetails} handleShowFaq={handleShowFaq} />
            </div>
            <FaqReturnBtn handleShowCards={handleShowCards} />
          </div>
        </>
      )}
      {/* {showBlog && (
        <>
          <div className="blog-content-box">
            <h1>Frequently Asked Questions</h1>
            <div className="blog-container">
              <FaqList faqDetails={faqDetails} handleShowFaq={handleShowFaq} />
              <FaqReturnBtn handleShowCards={handleShowCards} />
            </div>
          </div>
        </>
      )} */}
    </div>
  );
}

export default App;
