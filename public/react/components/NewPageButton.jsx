export const NewPageButton = ({ isNewPage, setIsNewPage }) => {
    return (
        <button onClick={() => setIsNewPage(true)}>New Page</button>
    );
};