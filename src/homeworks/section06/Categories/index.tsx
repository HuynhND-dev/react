import React from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Create from "./Create";

interface UpdateForm {
  name: string;
  description: string;
}

const schema = yup.object({
  name: yup.string().required("Tên danh mục không được để trống"),
  description: yup.string().required("Mô tả danh mục không được để trống"),
});

export default function GetAll() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateForm>({
    resolver: yupResolver(schema),
  });
  const [refresh, setRefresh] = React.useState(false);
  const [selectId, setSelectId] = React.useState<number>(-1);
  const [categories, setCategories] = React.useState<any>([]);

  const onSubmitUpdate: SubmitHandler<UpdateForm> = async (data) => {
    try {
      console.log(data);
      const update = await axios.patch(
        "https://server.aptech.io/online-shop/categories/" + selectId,
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      window.alert("Cập nhật thành công");
      setRefresh(!refresh);
    } catch (error) {
      console.log("update error: ", error);
    }
  };

  const deleteCategory = async (id: number) => {
    // console.log("id", id);
    try {
      await axios.delete(
        "https://server.aptech.io/online-shop/categories/" + id,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
    alert("Đã xoá danh mục có id: " + id);
  };

  const url = "https://server.aptech.io/online-shop/categories";
  React.useEffect(() => {
    const GetAll = async () => {
      try {
        const response: any = await axios.get(url);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetAll();
    console.log(refresh);
  }, [refresh]);

  return (
    <div className="">
      <Create setRefresh={setRefresh} refresh={refresh} />
      <table className="table table-striped">
        <thead>
          <tr className="table-dark">
            <td>ID</td>
            <td>Tên danh mục</td>
            <td>Mô tả</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: any) => {
            return (
              <tr key={category.id} className="table-light">
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-outline-warning btn-block"
                      data-bs-target="#Sua"
                      data-bs-toggle="modal"
                      onClick={() => {
                        setSelectId(category.id);
                        setValue("description", category.description);
                        setValue("name", category.name);

                        console.log(category.description);
                      }}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Xoá danh mục '" +
                              category.name +
                              "' có id: " +
                              category.id
                          )
                        ) {
                          deleteCategory(category.id);
                        }
                      }}
                    >
                      Xoá
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal sua */}
      <div
        className="modal fade"
        id="Sua"
        tabIndex={-1}
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLabel">
                Sửa danh mục
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                id="formUpdate"
                method="post"
                onSubmit={handleSubmit(onSubmitUpdate)}
              >
                <div className="mb-3">
                  <label htmlFor="InputEmail1" className="form-label">
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="InputEmail1"
                    aria-describedby="emailHelp"
                    {...register("name")}
                  />
                  <div id="emailHelp" className="form-text text-danger">
                    {errors.name?.message}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="InputPassword1" className="form-label">
                    Mô tả danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="InputPassword1"
                    {...register("description")}
                  />
                  <div id="emailHelp" className="form-text text-danger">
                    {errors.description?.message}
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                form="formUpdate"
                // onClick={}
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end Modal */}
    </div>
  );
}
