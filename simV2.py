# Importing Packages
import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt


# https://towardsdatascience.com/use-python-to-create-two-body-orbits-a68aed78099c
# https://towardsdatascience.com/how-to-animate-plots-in-python-2512327c8263
# https://ssd.jpl.nasa.gov/horizons/app.html#/

# Star Model
def model_2BP(state, t):
    mu = 1.33E+20  # Star gravitational parameter
    # [km^3/s^2]
    x = state[0]
    y = state[1]
    z = state[2]
    x_dot = state[3]
    y_dot = state[4]
    z_dot = state[5]
    x_ddot = -mu * x / (x ** 2 + y ** 2 + z ** 2) ** (3 / 2)
    y_ddot = -mu * y / (x ** 2 + y ** 2 + z ** 2) ** (3 / 2)
    z_ddot = -mu * z / (x ** 2 + y ** 2 + z ** 2) ** (3 / 2)
    dstate_dt = [x_dot, y_dot, z_dot, x_ddot, y_ddot, z_ddot]
    return dstate_dt


# Initial Conditions
X_0 = -2500  # [km]
Y_0 = -5500  # [km]
Z_0 = 3400  # [km]
VX_0 = 7.5  # [km/s]
VY_0 = 0.0  # [km/s]
VZ_0 = 4.0  # [km/s]
state_0 = [X_0, Y_0, Z_0, VX_0, VY_0, VZ_0]

# Time Array
t = np.linspace(0, 6 * 3600, 200)  # Simulates for a time period of 24
# hours [s]

# Solving ODE
sol = odeint(model_2BP, state_0, t)
X_Planet = sol[:, 0]  # X-coord [km] of Planetellite over time interval
Y_Planet = sol[:, 1]  # Y-coord [km] of Planetellite over time interval
Z_Planet = sol[:, 2]  # Z-coord [km] of Planetellite over time interval

# Setting up Spherical Star to Plot
N = 50
phi = np.linspace(0, 2 * np.pi, N)
theta = np.linspace(0, np.pi, N)
theta, phi = np.meshgrid(theta, phi)

r_Star = 696340  # Average radius of Star [km]
X_Star = r_Star * np.cos(phi) * np.sin(theta)
Y_Star = r_Star * np.sin(phi) * np.sin(theta)
Z_Star = r_Star * np.cos(theta)


def plotOrbit():
    # Plotting Star and Orbit
    fig = plt.figure()
    ax = plt.axes(projection='3d')
    ax.plot_surface(X_Star, Y_Star, Z_Star, color='yellow', alpha=0.7)
    ax.plot3D(X_Planet, Y_Planet, Z_Planet, 'green')
    ax.view_init(30, 145)  # Changing viewing angle (adjust as needed)
    plt.title('Two-Body Orbit')
    ax.set_xlabel('X [km]')
    ax.set_ylabel('Y [km]')
    ax.set_zlabel('Z [km]')

    # Make axes limits
    xyzlim = np.array([ax.get_xlim3d(), ax.get_ylim3d(),
                       ax.get_zlim3d()]).T
    XYZlim = np.asarray([min(xyzlim[0]), max(xyzlim[1])])
    ax.set_xlim3d(XYZlim)
    ax.set_ylim3d(XYZlim)
    ax.set_zlim3d(XYZlim * 3 / 4)
    plt.show()
