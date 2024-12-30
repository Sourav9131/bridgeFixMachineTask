import * as roleService from "./roleService.js";

export async function roleBaseListing(req, res) {
  try {
    const { roles } = req.body;

    if (!roles) {
      return res.send({
        status: 400,
        message: "missing field is required",
      });
    }

    let roleLisitng = await roleService.findRole(roles);

    if (!roleLisitng) {
      return res.send({
        status: 400,
        message: "no user found with this role",
      });
    }

    res.send({ status: 201, msg: "role fetch successfuly", data: roleLisitng });
  } catch (error) {
    console.log(error);
    return res.send({
      status: 500,
      message: "something went wrong",
    });
  }
}
