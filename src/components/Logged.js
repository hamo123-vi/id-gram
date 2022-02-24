import { AddPostModal } from "./Home/Add post modal/AddPostModal"
import { Border } from "./Home/Border"
import { Navigation } from "./Navigation/Navigation"
import { Page } from "./Page"


export const Logged = () => {
  return (
        <div>
            <Navigation />
            <Border />
            <AddPostModal />
            <Page />
         </div>
    )
}
