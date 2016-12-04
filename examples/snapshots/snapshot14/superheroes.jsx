(function() {
	var SuperheroCard = React.createClass({
		render: function() {
			return (
				<div className="superhero-card">
					<div className="superhero-card-inner">
						<div className="superhero-avatar-area">
							<div className="superhero-avatar-thumb" style={{ backgroundImage: "url('../../../images/avatars/batman.jpg')" }}></div>
						</div>
						<div className="superhero-info-area">
							<div className="superhero-info-name">
								Batman
							</div>
						</div>
					</div>
					<div className="superhero-card-close"></div>
				</div>
			);
		}
	});

	ReactDOM.render(<SuperheroCard />, document.getElementById("superhero-grid"));
})();