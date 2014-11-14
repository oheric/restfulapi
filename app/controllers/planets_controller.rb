class PlanetsController < ApplicationController

	def index
		planets = Planet.all
		render json: planets, status: 200
	end

	def create
		raise params.inspect
		planet = Planet.create(planet_params)
		render json: planet, status: 201
	end

	



	def update
		planet = Planet.find(params[:id])
		planet.update_attributes(planet_params)
		render nothing: true, status: 204
	end

	def destroy
		planet = Planet.find(params[:id])
		planet.destroy
		render nothing: true, status: 204

	end

	private

	def planet_params
		params.require(:planet).permit(:name, :image)
	end

end
