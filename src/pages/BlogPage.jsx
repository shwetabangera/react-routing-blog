import { Component } from "react";
import Url from "../apiCalls/ApiCalls";
import BlogMarkup from "../components/BlogMarkup";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import styles from "../styles/BlogPage.module.css";

class BlogPage extends Component {
	state = {
		blog: [],
		status: "",
		currentBlogId: "",
	};
	componentDidMount = (event) => {
		fetch(Url + this.props.match.params.id)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					blog: data.blogData,
					status: "Successful",
					currentBlogId: this.props.match.params.id,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	componentDidUpdate = (event) => {
		if (this.state.currentBlogId !== this.props.match.params.id) {
			if (this.state.status !== "") this.setState({ status: "" });
			fetch(Url + this.props.match.params.id)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					this.setState({
						blog: data.blogData,
						status: "Successful",
						currentBlogId: data.blogData.id,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	getBlog = (id) => {
		fetch(Url + id)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					blog: data.blogData,
					status: "Successful",
					currentBlogId: id,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				{this.state.status === "" ? (
					<Loading />
				) : this.state.status === "Successful" &&
				  this.state.blog !== undefined ? (
					<div className={styles["blog-container"]}>
						<Header />
						<BlogMarkup
							blog={this.state.blog}
							status={this.state.status}
							getBlog={this.getBlog}
							{...this.props}
						/>
						<Footer />
					</div>
				) : (
					<NotFound />
				)}
			</div>
		);
	}
}

export default BlogPage;
