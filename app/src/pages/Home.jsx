import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import {Post} from '../components';
import {TagsBlock} from '../components';
import {CommentsBlock} from '../components';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, fetchTags} from "../redux/slices/posts";

export const Home = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.posts)
    const isPostLoading = posts.status === 'loading'
    React.useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchTags())
    }, [])

    return (
        <>
            <Tabs style={{marginBottom: 15}} value={0} aria-label="basic tabs example">
                <Tab label="Новые"/>
                <Tab label="Популярные"/>
            </Tabs>

            <Grid container spacing={4}>
                <Grid xs={8} item>
                    {(isPostLoading ? [...Array(5)] : posts.items).map((obj, index) => isPostLoading ? (
                        <Post isLoading={true}/>
                    ) : (
                        < Post
                            id={obj._id}
                            title={obj.title}
                            user={obj.user}
                            createdAt={obj.createdAt}
                            viewsCount={obj.viewsCount}
                            commentsCount={3}
                            tags={obj.tags}
                            isEditable
                        />
                    ))}
                </Grid>

                <Grid xs={4} item>
                    <TagsBlock items={['react', 'typescript', 'заметки']} isLoading={false}/>
                    <CommentsBlock
                        items={[
                            {
                                user: {
                                    fullName: 'Вася Пупкин',
                                    avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                                },
                                text: 'Это тестовый комментарий',
                            },
                            {
                                user: {
                                    fullName: 'Иван Иванов',
                                    avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                                },
                                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
                            },
                        ]}
                        isLoading={false}
                    />
                </Grid>
            </Grid>
        </>
    );
};