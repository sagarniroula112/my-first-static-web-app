export function FaqReturnBtn({ handleShowCards }) {
  return (
    <>
      <button
        className="button-1"
        style={{
          width: "15vw",
          marginBottom: "14px",
          marginRight: "-100vh",
          marginTop: "0vh",
        }}
        onClick={handleShowCards}
      >
        Return Home
      </button>
    </>
  );
}
