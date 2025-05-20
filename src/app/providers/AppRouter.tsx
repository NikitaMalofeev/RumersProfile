import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';

const PageLoader = () => <div></div>;


function AppRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<PageLoader />}>
                        <MainPage />
                    </Suspense>
                }
            />
        </Routes >
    );
}

export default memo(AppRouter);
