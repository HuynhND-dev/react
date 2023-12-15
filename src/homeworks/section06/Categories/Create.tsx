import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

type Props = { setRefresh: any; refresh: any };
interface CreateForm {
  name: string;
  description: string;
}

const schema = yup.object({
  name: yup.string().required("Tên danh mục không được để trống"),
  description: yup.string().required("Mô tả danh mục không được để trống"),
});

export default function Create({ setRefresh, refresh }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateForm>({
    resolver: yupResolver(schema),
  });

  //   const [refresh, setRefresh] = React.useState(false);
  const onSubmitCreate: SubmitHandler<CreateForm> = async (data) => {
    // console.log(data);
    try {
      const response = await axios.post(
        "https://server.aptech.io/online-shop/categories",
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      setRefresh(!refresh);
      window.alert("Tạo mới thành công");
      //   setRefresh(!refresh);
      // console.log(refresh);
    } catch (error) {
      window.alert("tên danh mục đã có");
    }
  };

  return (
    <div>
      {/* Modal them */}
      <div className="row">
        <div className="col-md-12 text-end mb-2">
          <button
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#Them"
          >
            Thêm
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="Them"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Thêm danh mục mới
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
                id="formAdd"
                method="post"
                onSubmit={handleSubmit(onSubmitCreate)}
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("name")}
                  />
                  <div id="emailHelp" className="form-text text-danger">
                    {errors.name?.message}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Mô tả danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
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
              <button type="submit" className="btn btn-primary" form="formAdd">
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end Modal */}
    </div>
  );
}
