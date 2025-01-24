import Container from "@mui/material/Container";

import {Header} from "./components";
import {Home, PostPage, Registration, AddPost, Login} from "./pages";
import {Route, Router, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <Container maxWidth="lg">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Registration />}/>
                        <Route path="/posts/:id" element={<PostPage />}/>
                        <Route path="/addpost" element={<AddPost />}/>
                    </Routes>
            </Container>
        </>
    );
}

export default App;